export const getPlaceholderFile = async () => {
  const response = await fetch('/placeholder.jpg')
  const buffer = await response.arrayBuffer()
  return new File([buffer], 'placeholder.jpg', { type: 'image/jpg' })
}
