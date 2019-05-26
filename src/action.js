import ajax          from '@/utils/ajax';
import apiUrl        from '@/utils/apiUrl';
import { todayDate } from '@/utils/dateTimeHelper';

export const fetchHabitList = () => {
  return ajax(apiUrl.indexHabitListUrl, {
    params: {date: todayDate}
  });
};