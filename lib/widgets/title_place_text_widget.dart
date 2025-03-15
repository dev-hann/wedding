import 'package:flutter/material.dart';

class TitlePlaceTextWidget extends StatelessWidget {
  const TitlePlaceTextWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      "2025. 10. 18. SAT PM 02:30\n메종 드 프리미어 그랜드홀",
      textAlign: TextAlign.center,
      style: TextTheme.of(context).titleMedium,
    );
  }
}
