"use client"

import Image from "next/image"

export function OpensCredit() {
  return (
    <section className="bg-purple-900 h-[5vh] flex items-center">
      <div className="w-full">
        <div className="flex items-center justify-center gap-3 text-white/80">
          <span className="text-sm font-medium">
            Organizado com ❤️ por Opens Tecnologia
          </span>
          <Image
            src="/esquenta/Logo Opens.png"
            alt="Logo Opens Tecnologia"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
    </section>
  )
}