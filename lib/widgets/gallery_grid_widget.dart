import 'package:flutter/material.dart';

class GalleryGridWidget extends StatelessWidget {
  const GalleryGridWidget({
    super.key,
    required this.imageList,
    required this.onImageTap,
  });
  final List<String> imageList;
  final Function(int index) onImageTap;

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      itemCount: 9,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        mainAxisSpacing: 16.0,
        crossAxisSpacing: 16.0,
      ),
      itemBuilder: (context, index) {
        final path = imageList[index];
        return GestureDetector(
          onTap: () {},
          child: Image.asset(
            path,
            fit: BoxFit.cover,
          ),
        );
      },
    );
  }
}
