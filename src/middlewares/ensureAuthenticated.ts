import { authConfig } from '@/configs/auth'
import { AppError } from '@/utils/AppError'
import type { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token não informado', 401)
  }

  const [, token] = authHeader.split(' ')

  const { sub: user_id } = verify(token, authConfig.jwt.secret)

  request.user = {
    id: String(user_id),
  }
  console.log(request.user)

  return next()
}
