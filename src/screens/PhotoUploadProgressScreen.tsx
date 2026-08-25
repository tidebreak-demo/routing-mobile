import { useMemo } from "react"

type Props = { jobId: string; onSelect: (id: string) => void }

export function PhotoUploadProgress({ jobId, onSelect }: Props) {
  const label = useMemo(() => `Job ${jobId}`, [jobId])

  return (
    <button type="button" onClick={() => onSelect(jobId)}>
      {label}
    </button>
  )
}
