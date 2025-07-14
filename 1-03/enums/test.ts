async function getFaqs(req: {
  topicId: number
  status: string
}): Promise<{ question: string; answer: string; tags: string[] }[]> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  })
  const data = await res.json()
  return data
}
