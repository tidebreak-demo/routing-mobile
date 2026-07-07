import { useMemo } from "react"

export function JobRow({ job }: { job: Job }) {
  return (
    <Pressable>
      <Text>{job.site.name}</Text>
      <Text>{job.site.address}</Text>
    </Pressable>
  )
}
