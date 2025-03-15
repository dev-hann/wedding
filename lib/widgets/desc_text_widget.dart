import 'package:flutter/material.dart';

class DescTextWidget extends StatelessWidget {
  const DescTextWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      "서로가 마주보며 다져온 사랑을\n이제 함께 한 곳을  바라보며\n걸어갈 수 있는 큰 사랑으로 키우고자 합니다.\n저희 두 사람이 사랑의 이름으로\n지켜나갈 수 있게 앞날을\n축복해 주시면 감사하겠습니다.",
      textAlign: TextAlign.center,
    );
  }
}
