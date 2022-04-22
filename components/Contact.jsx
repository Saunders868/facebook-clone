import Image from "next/image"

function Contact({src, name}) {
  return (
    <div className="relative flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image
            className="rounded-full"
            objectFit="cover"
            height={50}
            width={50}
            src={src}
            layout='fixed'
            alt=""
        />
        <p>{name}</p>

        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
    </div>
  )
}

export default Contact