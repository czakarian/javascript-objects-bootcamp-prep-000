var playlist = {Post Malone: "I Fall Apart"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
