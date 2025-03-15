import 'package:flutter/material.dart';

class MessageCardWidget extends StatelessWidget {
  const MessageCardWidget({
    super.key,
  });

  Widget textField({
    required String hintText,
    required TextEditingController controller,
  }) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: TextField(
        controller: controller,
        decoration: InputDecoration(
          hintText: hintText,
          border: OutlineInputBorder(),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        textField(
          controller: TextEditingController(),
          hintText: '이름',
        ),
        textField(
          controller: TextEditingController(),
          hintText: '비밀번호',
        ),
        textField(
          controller: TextEditingController(),
          hintText: '축하 메세지',
        ),
        ElevatedButton(
          onPressed: () {},
          child: Text('축하 메세지 남기기'),
        ),
      ],
    );
  }
}
