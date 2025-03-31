export async function pingBackend() {
    const res = await fetch('http://127.0.0.1:8000/api/ping');
    const data = await res.json();
    console.log('[Backend]', data);
    return data;
  }
  