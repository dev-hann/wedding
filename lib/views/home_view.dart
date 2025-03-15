import 'dart:ui';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:wedding/service/audio_service.dart';
import 'package:wedding/widgets/attend_card_widget.dart';
import 'package:wedding/widgets/desc_text_widget.dart';
import 'package:wedding/widgets/gallery_grid_widget.dart';
import 'package:wedding/widgets/location_widget.dart';
import 'package:wedding/widgets/message_card_widget.dart';
import 'package:wedding/widgets/page_layout.dart';
import 'package:wedding/widgets/scroll_animation_widget.dart';
import 'package:wedding/widgets/title_image_widget.dart';
import 'package:wedding/widgets/title_place_text_widget.dart';
import 'package:wedding/widgets/title_text_widget.dart';

class HomeView extends StatefulWidget {
  const HomeView({
    super.key,
  });

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  final _audioService = AudioService();
  final scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _audioService.init();
    });
  }

  @override
  void dispose() {
    _audioService.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: StreamBuilder<PlayerState>(
        stream: _audioService.onPlayerStateChanged,
        builder: (context, snapshot) {
          final isPlaying = snapshot.data == PlayerState.playing;
          return ElevatedButton(
            onPressed: isPlaying ? _audioService.pause : _audioService.resume,
            child: Icon(isPlaying ? Icons.pause : Icons.play_arrow),
          );
        },
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(
            maxWidth: 800.0,
            minWidth: 600,
          ),
          child: SingleChildScrollView(
            controller: scrollController,
            child: Column(
              children: [
                PageLayout(
                  children: [
                    Expanded(
                      flex: 40,
                      child: TitleImageWidget(),
                    ),
                    Expanded(
                      flex: 60,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Text(
                                "윤여환 & 송지영",
                                style: TextTheme.of(context).headlineSmall,
                              ),
                              Text(
                                "결혼 합니다",
                                style: TextTheme.of(context).titleLarge,
                              ),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: SizedBox(
                              height: 100.0,
                              child: VerticalDivider(),
                            ),
                          ),
                          TitlePlaceTextWidget(),
                        ],
                      ),
                    ),
                  ],
                ),
                ScrollAnimationWidget(
                  controller: scrollController,
                  child: Column(
                    children: [
                      DescTextWidget(),
                      AttendCardWidget(),
                    ],
                  ),
                ),
                ScrollAnimationWidget(
                  controller: scrollController,
                  child: TitleTextWidget(
                    title: "Gallery",
                    child: GalleryGridWidget(
                      imageList: List.generate(9, (index) {
                        return '/image/$index.jpeg';
                      }),
                      onImageTap: (index) {},
                    ),
                  ),
                ),
                // TitleTextWidget(
                //   title: "Location",
                //   child: LocationWidget(),
                // ),
                ScrollAnimationWidget(
                  controller: scrollController,
                  child: TitleTextWidget(
                    title: "Guest Book",
                    child: MessageCardWidget(),
                  ),
                ),
                const SizedBox(height: 500.0),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
