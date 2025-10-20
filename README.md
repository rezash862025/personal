# next-mentor-landing-fixed2

A sleek mentor landing page built with **Next.js (App Router)** and **Tailwind CSS**, featuring a client‑side **EmailJS** contact form. Optimized for quick deploys on Vercel or Netlify.

## Setup

```bash
npm install
cp .env.example .env.local
# Fill the EmailJS vars in .env.local
npm run dev
```

### Env vars

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### EmailJS Template
Create variables in your template: `from_name`, `from_email`, `goal`, `message`

## Deploy
- **Vercel**: Import repo, set env vars, build (`next build`) and deploy.
- **Netlify**: Use Next adapter or deploy via Vercel for easiest SSR/ISR. This project is mostly static, so Vercel is recommended.

## Notes
- Client‑side EmailJS requires only the **public** key (intended for browser use).
- A honeypot field is used to reduce spam. For stronger protection, consider hCaptcha/Turnstile.
# personal
