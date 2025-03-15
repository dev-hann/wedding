import 'package:audioplayers/audioplayers.dart';

class AudioService {
  final _audioPlayer = AudioPlayer();

  Stream<PlayerState> get onPlayerStateChanged =>
      _audioPlayer.onPlayerStateChanged;

  Future init() async {
    final url = "/audio/bgm.mp3";
    await _audioPlayer.play(AssetSource(url));
    _audioPlayer.setReleaseMode(ReleaseMode.loop);
  }

  Future pause() async {
    await _audioPlayer.pause();
  }

  Future resume() async {
    await _audioPlayer.resume();
  }

  Future dispose() async {
    await _audioPlayer.dispose();
  }
}
