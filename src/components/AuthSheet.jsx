import { useState } from 'react'
import { X, Mail, User, ShieldCheck } from 'lucide-react'
import AppButton from './AppButton'

export default function AuthSheet({ open, onClose, onSuccess }) {
  const [step, setStep] = useState('welcome')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] rounded-t-[32px] bg-white dark:bg-[#121218] border border-zinc-200 dark:border-zinc-800 p-5 space-y-5 animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            Continue with ABTalks
          </h2>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-[#1A1A22] flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'welcome' && (
          <>
            <div className="space-y-2">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
                Sync your streak, XP, tokens, and challenge progress across devices.
              </p>
            </div>

            <button
              onClick={onSuccess}
              className="w-full h-12 rounded-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center gap-3 font-semibold text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-[#1A1A22] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.4 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.3C29.2 34.9 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 6.9l6.3 5.3C39.7 36.5 44 30.8 44 24c0-1.3-.1-2.4-.4-3.5z"/>
              </svg>
              Continue with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-[#121218] px-3 text-zinc-500">
                  or
                </span>
              </div>
            </div>

            <AppButton variant="secondary" onClick={() => setStep('signup')}>
              Create account
            </AppButton>
          </>
        )}

        {step === 'signup' && (
          <>
            <div className="space-y-3">
              <div className="relative">
                <User className="w-4 h-4 absolute left-4 top-4 text-zinc-400" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="w-4 h-4 absolute left-4 top-4 text-zinc-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all"
                />
              </div>
            </div>

            <AppButton onClick={() => setStep('otp')}>
              Send OTP
            </AppButton>

            <button
              onClick={() => setStep('welcome')}
              className="w-full text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Back
            </button>
          </>
        )}

        {step === 'otp' && (
          <>
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7 text-emerald-500" />
              </div>

              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Verify your email
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                We sent a 6-digit code to
              </p>

              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                {email || 'student@example.com'}
              </p>
            </div>

            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              maxLength={6}
              className="w-full h-12 text-center tracking-[0.4em] text-lg rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all"
            />

            <AppButton onClick={onSuccess}>
              Verify & Continue
            </AppButton>

            <button className="w-full text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  )
}