import app from "../config/app"

const AuthRepository = {
  signin: async (data: { email: string, password: string }) => {
    try {
      const response  = await app.post('/unauth/signin', data)
      return response.data
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default AuthRepository