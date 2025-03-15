import 'package:flutter/material.dart';
import 'package:visibility_detector/visibility_detector.dart';

class ScrollAnimationWidget extends StatefulWidget {
  const ScrollAnimationWidget({
    super.key,
    required this.controller,
    required this.child,
  });
  final ScrollController controller;
  final Widget child;

  @override
  State<ScrollAnimationWidget> createState() => _ScrollAnimationWidgetState();
}

class _ScrollAnimationWidgetState extends State<ScrollAnimationWidget> {
  final ValueNotifier<bool> _visibleNotifier = ValueNotifier(false);
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      widget.controller.addListener(_scrollListener);
    });
  }

  void _scrollListener() {
    final maxHeight = MediaQuery.of(context).size.height;
    final renderBox = context.findRenderObject() as RenderBox?;
    final currentOffset = renderBox?.localToGlobal(Offset.zero) ?? Offset.zero;
    if (maxHeight - currentOffset.dy < 300) {
      _visibleNotifier.value = true;
    }
  }

  @override
  Widget build(BuildContext context) {
    final duration = Duration(milliseconds: 1000);
    return ValueListenableBuilder<bool>(
      valueListenable: _visibleNotifier,
      builder: (context, visible, child) {
        return AnimatedSlide(
          offset: visible ? Offset.zero : Offset(0, 0.2),
          duration: duration,
          child: AnimatedOpacity(
            duration: duration,
            opacity: visible ? 1.0 : 0.0,
            child: widget.child,
          ),
        );
      },
    );
  }
}
