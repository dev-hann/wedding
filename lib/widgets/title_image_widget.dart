import 'package:flutter/material.dart';

class TitleImageWidget extends StatelessWidget {
  const TitleImageWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Image.network(
      "https://resources.barunsonmcard.com/upload/template/MC1223/88b3cf3d-4ff0-4aaf-b846-8c2b7507653e.png",
      fit: BoxFit.cover,
    );
  }
}
