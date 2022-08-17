import React from "react";

class Explore extends React.Component{

    render(){
        return(
            <div className="grid grid-cols-3 m-10 gap-10">
                <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="japan.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Land of Rising Sun</div>
                        <p class="text-gray-700 text-base">
                        Both Nippon and Nihon literally mean "the sun's origin", that is, where the sun originates, and are often translated as the Land of the Rising Sun.
                        </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#japan</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#anime</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#arigato</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="india.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Land of Diversity</div>
                        <p class="text-gray-700 text-base">
                        India is a kaleidoscope of cultures that includes umpteen variations in food, clothing, language, music and religious beliefs. This colourful spread has been shaped by the long history and unique geography of this land.
                        </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#india</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#monuments</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#namaste</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="australia.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Land Down Under</div>
                        <p class="text-gray-700 text-base">
                        Australia is colloquially known as "the Land Down Under" (or just "Down Under"), which derives from the country's position in the Southern Hemisphere, at the antipodes of the United Kingdom.
                        </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#australia</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#beaches</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#oi mate</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Explore;