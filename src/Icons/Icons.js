import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashAlt,
  faArrowRight,
  faArrowLeft,
  faPlusCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

export const icons = () => library.add(
  faTrashAlt,
  faArrowRight,
  faArrowLeft,
  faPlusCircle,
  faTimesCircle
);