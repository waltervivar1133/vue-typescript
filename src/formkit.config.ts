import { generateClasses } from "@formkit/themes";

const config = {
  config: {
    classes: generateClasses({
      global : {
        input: "w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-success focus:bg-white focus:outline-none placeholder:text-sm placeholder:font-normal placeholder:text-gray-scale-500",
        message: "w-full text-xs text-error font-normal py-2"
      },
      submit: {
        input: "$reset w-full block bg-gray-scale-900 hover:bg-gray-950/80 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-5"
      }
    })
  }
}

export default config;