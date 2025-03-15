import 'dart:html' as html;
import 'dart:js' as js;
import 'package:flutter/material.dart';

class LocationWidget extends StatefulWidget {
  const LocationWidget({super.key});

  @override
  State<LocationWidget> createState() => _LocationWidgetState();
}

class _LocationWidgetState extends State<LocationWidget> {
  final latitude = 37.3595704;
  final longitude = 127.105399;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadNaverMap();
    });
  }

  void _loadNaverMap() {
    Future.delayed(Duration(milliseconds: 500), () {
      js.context.callMethod('eval', [
        """
          var mapOptions = {
              center: new naver.maps.LatLng($latitude, $longitude),
              zoom: 15,
          };
          var map = new naver.maps.Map("naver-map", mapOptions);
          var marker = new naver.maps.Marker({
                position: new naver.maps.LatLng($latitude,$longitude),
                map: map
              });
        """
      ]);
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 400,
      child: ClipRect(
        clipBehavior: Clip.hardEdge,
        child: HtmlElementView.fromTagName(
          onElementCreated: (element) {
            element as html.HtmlElement;
            element.id = 'naver-map';
          },
          tagName: 'naver-map',
        ),
      ),
    );
  }
}
