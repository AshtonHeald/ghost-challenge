<!-- AI Built This, Don't Touch o.O -->
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
});

const player = ref(null);
const isPlaying = ref(false);
const playerId = ref(
  `youtube-player-${Math.random().toString(36).substr(2, 9)}`
);

function extractVideoId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const playVideo = () => {
  if (player.value) {
    player.value.playVideo();
    isPlaying.value = true;
  }
};

onMounted(() => {
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  const initializeWhenReady = () => {
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      setTimeout(initializeWhenReady, 100);
    }
  };

  initializeWhenReady();
});

function initPlayer() {
  const videoId = extractVideoId(props.videoUrl);
  if (!videoId) {
    console.error("Invalid YouTube URL");
    return;
  }

  player.value = new YT.Player(playerId.value, {
    videoId: videoId,
    playerVars: {
      controls: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
    events: {
      onReady: () => {},
      onStateChange: (event) => {
        isPlaying.value = event.data === YT.PlayerState.PLAYING;
      },
    },
  });
}
</script>

<template>
  <div class="youtube-container">
    <div :id="playerId"></div>
    <button v-if="!isPlaying" class="custom-play-button" @click="playVideo">
      ▶
    </button>
  </div>
</template>

<style>
.youtube-container {
  position: relative;
  width: 100%;
  max-width: 843px;
  aspect-ratio: 16 / 9;
}
iframe {
  width: 100% !important;
  aspect-ratio: 16 / 9;
  height: auto;
}
.youtube-container div {
  width: 100%;
  height: 100%;
}

.custom-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  width: 84px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hide YouTube iframe when custom play button is showing */
.youtube-container:not(:has(.custom-play-button)) div {
  pointer-events: none;
}
</style>
