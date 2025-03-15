import 'package:flutter/material.dart';

class AttendCardWidget extends StatelessWidget {
  const AttendCardWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Text("참석 의사 전달"),
            Text("참석 의사 전달하기"),
            ElevatedButton(
              onPressed: () {},
              child: Text("참석"),
            ),
          ],
        ),
      ),
    );
  }
}
