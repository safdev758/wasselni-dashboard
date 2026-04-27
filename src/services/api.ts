const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

let accessToken: string | null = localStorage.getItem('admin_access_token');

export const setAccessToken = (token: string | null) => {
  accessToken = token;
  if (token) {
    localStorage.setItem('admin_access_token', token);
  } else {
    localStorage.removeItem('admin_access_token');
  }
};

export const getAccessToken = () => accessToken;

const headers = (): HeadersInit => {
  const h: HeadersInit = { 'Content-Type': 'application/json' };
  if (accessToken) {
    h['Authorization'] = `Bearer ${accessToken}`;
  }
  return h;
};

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
};

const get = (path: string) =>
  fetch(`${API_BASE_URL}${path}`, { headers: headers() }).then(handleResponse);

const post = (path: string, body?: object) =>
  fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: headers(),
    body: body ? JSON.stringify(body) : undefined,
  }).then(handleResponse);

const put = (path: string, body?: object) =>
  fetch(`${API_BASE_URL}${path}`, {
    method: 'PUT',
    headers: headers(),
    body: body ? JSON.stringify(body) : undefined,
  }).then(handleResponse);

// --- Auth ---
export const authAPI = {
  sendOTP: (phone: string) =>
    post('/auth/phone/send', { phone, user_type: 'rider' }),
  verifyOTP: (phone: string, code: string) =>
    post('/auth/phone/verify', { phone, code, user_type: 'rider' }),
};

// --- Admin Endpoints ---
export const adminAPI = {
  listDrivers: () => get('/admin/drivers'),
  getDriverDocuments: (driverId: string) => get(`/admin/drivers/${driverId}/documents`),
  listUsers: () => get('/admin/users'),
  getUser: (userId: string) => get(`/admin/users/${userId}`),
  listRides: () => get('/rides'),
  getRide: (rideId: string) => get(`/rides/${rideId}`),
  listReports: (status?: string) => get(`/reports${status ? `?status=${status}` : ''}`),
  getReport: (reportId: string) => get(`/reports/${reportId}`),
  resolveReport: (reportId: string, resolution: string, notes: string) =>
    put(`/reports/${reportId}/resolve`, { resolution, notes }),
};
