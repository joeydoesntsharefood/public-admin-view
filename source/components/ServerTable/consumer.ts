import app from "@/source/config/app"

const serverTableConsumer = async (path: string, search?: string) => {
  try {
    const response = await app.get(search ? `${path}?search=${search}` : path)
    return response.data
  } catch (err: any) {
    return err
  }
}

export default serverTableConsumer