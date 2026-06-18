import { useMemo } from "react"

export function JobPhotosScreen({ jobId }: { jobId: string }) {
  return <PhotoPicker onPick={(uri) => enqueue({ id: uuid(), path: `/jobs/${jobId}/photos`, body: { uri }, queuedAt: new Date().toISOString() })} />
}
