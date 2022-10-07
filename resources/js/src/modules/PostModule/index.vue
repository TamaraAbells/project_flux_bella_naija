<template>
  <div>
    <div class="flex flec-row justify-between items-start gap-20 py-5 px-10">
      <div class="flex flex-col justify-start gap-5">
        <div class="flex flex-col justify-start gap-2">
          <div class="flex flex-row">
            <p class="bg-red-500 text-black px-5 py-2 text-xs font-bold uppercase rounded">
            Category
          </p>
          </div>
          <h1 class="text-5xl font-bold">
            Anikulapo: Saro (Kunle Remi) & Arolake (Bimbo Ademoye) Tried to Resolve their Issues in this Interview on KAPTV
          </h1>
        </div>
        <div class="flex flex-row justify-start items-start gap-2">
          <img class="w-12 h-12 rounded-full border-2"
            :src="require('../../assets/BellaNaija-Weddings-43-560x600.jpg')"
          />
          <div class="flex flex-col justify-start items-start gap-1">
            <p class="text-sm text-gray-400 font-semibold">Published 1 hour ago  on October 7, 2022</p>
            <p class="text-sm text-black-800 font-semibold">By: BNTV</p>
          </div>
        </div>
        <div class="flex justify-center items-center gap-5">
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="h-5 text-white bg-blue-700 px-16 py-1 rounded"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="h-5 text-white bg-blue-500 px-16 py-1 rounded"
          />
          <font-awesome-icon
            icon="fa-brands fa-youtube"
            class="h-5 text-white bg-red-700 px-16 py-1 rounded"
          />
        </div>
        <div class="flex flex-col justify-start gap-5 tracking-6 leading-6">
          <img class="w-full h-auto"
            :src="require('../../assets/ANIKULAPO-1.jpeg')"
          />
          <p class="text-gray-700 text-lg whitespace-wrap">
            KAPTV just released an extensive interview with characters Arolake played by Bimbo Ademoye and Saro played by Kunle Remi in the recently-released Netflix movie, ‘Anikulapo‘, directed by Kunle Afolayan. 
            In the interview, Saro and Arolake tried to resolve their issues.
            The stars also talked about the struggles they faced playing their characters – for Kunle, it was having to speak ancient Yoruba and for Bimbo, it was having to stay away from home for such a long time.
            They also highlighted their take on the relationship between Saro and Arolake believed to have been love at first sight.
            Watch the interview below:
          </p>
        </div>
        <div class="flex flex-col gap-20 w-auto">
          <CommentBox />
          <YouMayLike />
        </div>
      </div>
      <div>
        <RecentPosts />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    RecentPosts: () => import('../../components/RecentPosts'),
    CommentBox: () => import('./CommentBox'),
    YouMayLike: () => import('./YouMayLike'),
  }
}
</script>