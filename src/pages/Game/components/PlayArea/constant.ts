import Image_heartbeat_1 from "@/assets/images/play_area/heartbeat_1.png";
import Image_heartbeat_2 from "@/assets/images/play_area/heartbeat_2.png";
import Image_heartbeat_3 from "@/assets/images/play_area/heartbeat_3.png";
import Image_heartbeat_line from "@/assets/images/play_area/heartbeat_line.png";
// 心跳线数组
export const HEARTBEAT_LINE = [
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_1, hasAlert: true, width: 78 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_2, hasAlert: true, width: 150 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_3, hasAlert: true, width: 393 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_2, hasAlert: true, width: 150 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_2, hasAlert: true, width: 150 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_1, hasAlert: true, width: 78 },
  { img: Image_heartbeat_3, hasAlert: true, width: 393 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_1, hasAlert: true, width: 78 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
  { img: Image_heartbeat_1, hasAlert: true, width: 78 },
  { img: Image_heartbeat_line, hasAlert: false, width: 435 },
];
// 总憋气时间
export const TOTAL_HOLD_BREATH_TIME = 8;
// 最大错误次数
export const MAX_ERROR_COUNT = 4;
