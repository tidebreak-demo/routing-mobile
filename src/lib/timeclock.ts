export async function clockIn(jobId: string, at = new Date()) {
  return api.post(`/jobs/${jobId}/clock_in`, { at: at.toISOString() })
}

export async function clockOut(jobId: string, at = new Date()) {
  return api.post(`/jobs/${jobId}/clock_out`, { at: at.toISOString() })
}
