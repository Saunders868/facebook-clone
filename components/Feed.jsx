import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 mr-4 xl:mr-40 overflow-y-auto pt-6 scrollbar-hide">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            {/* stories */}
              <Stories />
            {/* inputbox */}
            <InputBox />
            {/* posts */}
            <Posts />
        </div>
    </div>
  )
}

export default Feed