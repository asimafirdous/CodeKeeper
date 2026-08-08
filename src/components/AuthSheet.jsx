import { useState } from 'react'
import { X, Mail, User, ShieldCheck } from 'lucide-react'
import AppButton from './AppButton'

export default function AuthSheet({ open, onClose, onSuccess }) {
  const [step, setStep] = useState('welcome')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState('')
  const [message, setMessage] = useState('')

  if (!open) return null

  const sendOtp = () => {
    if (!email) {
      setMessage('Please enter your email')
      return
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedOtp(code)
    setMessage(`Demo OTP: ${code}`)
    setStep('otp')
  }

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setMessage('Email verified successfully')
      setTimeout(() => {
        onSuccess()
      }, 500)
    } else {
      setMessage('Invalid OTP')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] rounded-t-[32px] bg-white dark:bg-[#121218] border border-zinc-200 dark:border-zinc-800 p-5 space-y-5">
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

        {message && (
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
            {message}
          </div>
        )}

        {step === 'welcome' && (
          <>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              Sync your streak, XP, tokens, and challenge progress across devices.
            </p>

            <button
              onClick={onSuccess}
              className="w-full h-12 rounded-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center gap-3 font-semibold text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-[#1A1A22] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
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
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400"
                />
              </div>

              <div className="relative">
                <Mail className="w-4 h-4 absolute left-4 top-4 text-zinc-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400"
                />
              </div>
            </div>

            <AppButton onClick={sendOtp}>Send OTP</AppButton>

            <button
              onClick={() => setStep('welcome')}
              className="w-full text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
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
                Enter the 6-digit code sent to
              </p>

              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                {email}
              </p>
            </div>

            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              maxLength={6}
              className="w-full h-12 text-center tracking-[0.4em] text-lg rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] border border-zinc-200 dark:border-zinc-800 outline-none focus:border-orange-400"
            />

            <AppButton onClick={verifyOtp}>Verify & Continue</AppButton>

            <button
              onClick={sendOtp}
              className="w-full text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  )
}