"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { contactFormSchema, type ContactFormData } from '@/schemas/contact'
import { siteContent } from '@/content/site'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // v2: wire to form once email/notification flow is approved
    // await submitContactMessage(data)
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', data)
    toast.success(siteContent.contactPage.successMessage)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-primary-foreground">
          {siteContent.contactPage.fields.name}
        </Label>
        <Input
          id="name"
          {...register('name')}
          className={cn(
            "bg-white text-foreground border-0",
            errors.name && "ring-2 ring-destructive"
          )}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-300">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-primary-foreground">
          {siteContent.contactPage.fields.email}
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={cn(
            "bg-white text-foreground border-0",
            errors.email && "ring-2 ring-destructive"
          )}
          dir="ltr"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-300">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-primary-foreground">
          {siteContent.contactPage.fields.phone}
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          className={cn(
            "bg-white text-foreground border-0",
            errors.phone && "ring-2 ring-destructive"
          )}
          dir="ltr"
          placeholder="05XXXXXXXX"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-red-300">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary-foreground">
          {siteContent.contactPage.fields.message}
        </Label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className={cn(
            "flex w-full rounded-md bg-white text-foreground px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            errors.message && "ring-2 ring-destructive"
          )}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-300">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-[#F5B560] text-accent-foreground font-semibold"
      >
        {isSubmitting ? 'جاري الإرسال...' : siteContent.contactPage.submit}
      </Button>
    </form>
  )
}
