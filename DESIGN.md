# RIDE_FLOW Backend API Design

This document outlines the RESTful API endpoints and data schemas required to power the RIDE_FLOW Admin Console. All responses are in JSON format and follow a strict Neo-Brutalist architectural standard.

## Global Types & Schemas (TypeScript)

```typescript
export type UserStatus = 'Active' | 'Suspended' | 'Pending';
export type DriverStatus = 'Active' | 'Suspended' | 'Pending' | 'Flagged';
export type RideStatus = 'Active' | 'Completed' | 'Canceled' | 'Scheduled';
export type UserTier = 'Corporate Tier' | 'Premium Tier' | 'Standard Tier';

export interface AdminProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'System Administrator' | 'Operations Manager';
}

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: DriverStatus;
  joined: string; // ISO 8601
  rating: number;
  totalRides: number;
  totalEarnings: number;
  vehicle: {
    model: string;
    plate: string;
    vin: string;
    odometer: string;
  };
  documents: {
    license: string; // URL
    insurance: string; // URL
    verification: 'Verified' | 'Pending' | 'Rejected';
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  tier: UserTier;
  status: UserStatus;
  totalRides: number;
  joined: string; // ISO 8601
  rating: number;
}

export interface Ride {
  id: string;
  date: string; // ISO 8601
  startTime: string;
  endTime?: string;
  customer: { id: string; name: string };
  driver: { id: string; name: string };
  origin: string;
  destination: string;
  fare: number;
  status: RideStatus;
  metrics?: {
    distance: string; // "8.4 miles"
    duration: string; // "25 min"
  };
}

export interface Transaction {
  id: string;
  date: string;
  type: 'Credit' | 'Debit';
  amount: number;
  status: 'Settled' | 'Pending' | 'Failed';
  provider: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  entity: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface APIError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}
```

## 1. Authentication & Admin Profile

### `GET /api/auth/me`
*   **Response:** `200 OK`
*   **Body:** `AdminProfile`

### `PATCH /api/auth/profile`
*   **Request Body:** `Partial<Pick<AdminProfile, 'name' | 'email' | 'avatarUrl'>>`
*   **Response:** `200 OK` - Returns updated `AdminProfile`

### `POST /api/auth/login`
*   **Request Body:** `{ email: string; password: string }`
*   **Response:** `200 OK` - Returns `{ token: string; user: AdminProfile }`
*   **Errors:** `401 Unauthorized` (Invalid credentials)

---

## 2. Dashboard & Analytics

### `GET /api/dashboard/summary`
*   **Response:** `200 OK`
*   **Body:**
    ```json
    {
      "netRevenue": 84290,
      "totalRides": 3440,
      "activeDrivers": 1204,
      "netGrowth": 14.5,
      "recentReports": [
        { "id": "string", "type": "string", "priority": "High" | "Med", "time": "string" }
      ]
    }
    ```

---

## 3. Driver Management

### `GET /api/drivers`
*   **Query Params:** `status?: string`, `search?: string`, `page?: number`
*   **Response:** `200 OK`
*   **Body:** `{ drivers: Driver[]; total: number; pages: number }`

### `GET /api/drivers/:id`
*   **Response:** `200 OK`
*   **Body:** `Driver`

### `GET /api/drivers/:id/rides`
*   **Response:** `200 OK`
*   **Body:** `Ride[]` (Limited to recent 10-20)

### `PATCH /api/drivers/:id`
*   **Request Body:** `{ status?: DriverStatus; verificationStatus?: string }`
*   **Response:** `200 OK`

---

## 4. User Management

### `GET /api/users`
*   **Query Params:** `tier?: UserTier`, `status?: UserStatus`, `search?: string`
*   **Response:** `200 OK`
*   **Body:** `{ users: User[]; total: number }`

### `GET /api/users/:id/rides`
*   **Response:** `200 OK`
*   **Body:** `Ride[]`

---

## 5. Ride Logistics

### `GET /api/rides`
*   **Query Params:** `status?: RideStatus`, `fromDate?: string`, `toDate?: string`
*   **Response:** `200 OK`
*   **Body:** `{ rides: Ride[]; total: number }`

### `GET /api/rides/:id`
*   **Response:** `200 OK`
*   **Body:**
    ```json
    {
      "ride": "Ride",
      "fareBreakdown": [
        { "label": "Base Fare", "value": 5.00 },
        { "label": "Distance", "value": 22.00 }
      ]
    }
    ```

---

## 6. Financials

### `GET /api/finance/overview`
*   **Response:** `200 OK`
*   **Body:**
    ```json
    {
      "grossRevenue": 120000,
      "payouts": 90000,
      "netRevenue": 30000,
      "activeDisputes": 12
    }
    ```

### `GET /api/finance/revenue-trend`
*   **Response:** `200 OK`

---

## 7. System Audit & Operations

### `GET /api/system/audit-logs`
*   **Query Params:** `severity?: string`, `entity?: string`, `actor?: string`
*   **Response:** `200 OK`
*   **Body:** `{ logs: AuditLog[]; total: number }`

### `GET /api/system/fleet/active`
*   **Response:** `200 OK`
*   **Body:** `{ dispatches: Array<{ id: string; lat: number; lng: number; status: string }> }`

---

## Error Response Format
All non-2xx responses will return the following structure:
```json
{
  "error": {
    "code": "ENTITY_NOT_FOUND",
    "message": "The requested resource could not be found.",
    "details": {}
  }
}
```
