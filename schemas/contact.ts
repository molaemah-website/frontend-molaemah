import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'الاسم يجب أن يكون حرفين على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' }),
  email: z
    .string()
    .email({ message: 'البريد الإلكتروني غير صالح' }),
  phone: z
    .string()
    .regex(
      /^(\+966|966|0)?5\d{8}$/,
      { message: 'رقم الهاتف غير صالح. يجب أن يكون بصيغة سعودية صحيحة' }
    )
    .transform((val) => val.replace(/[\s-]/g, '')), // Remove spaces and dashes
  message: z
    .string()
    .min(10, { message: 'الرسالة يجب أن تكون 10 أحرف على الأقل' })
    .max(1000, { message: 'الرسالة طويلة جداً' }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
