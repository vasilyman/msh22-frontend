import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import IsBetween from 'dayjs/plugin/isBetween';

dayjs.extend(IsBetween);
dayjs.extend(customParseFormat);
dayjs.locale('ru');

export default dayjs;
