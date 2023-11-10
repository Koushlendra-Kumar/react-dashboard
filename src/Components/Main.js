import { PieChart } from "@mui/x-charts";
import studentData from "../assets/data.json";
import "./Main.css";

const Main = () => {
  const good = studentData["Behavioral Analytics"].filter(
    (val) => val === "good"
  ).length;
  const bad = studentData["Behavioral Analytics"].filter(
    (val) => val === "bad"
  ).length;

  return (
    <main>
      <div className="student-name">Hello, {studentData.NAME}</div>
      <div className="heading">Attendance</div>
      <table className="attendance">
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
        <tr>
          <td></td>
          <td>{studentData.ATTENDANCE.monday.date}</td>
          <td>{studentData.ATTENDANCE.tuesday.date}</td>
          <td>{studentData.ATTENDANCE.wednesday.date}</td>
          <td>{studentData.ATTENDANCE.thursday.date}</td>
          <td>{studentData.ATTENDANCE.friday.date}</td>
        </tr>
        <tr>
          <td>FN</td>
          <td className={`${studentData.ATTENDANCE.monday.fn} test`}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.tuesday.fn}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.wednesday.fn}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.thursday.fn}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.friday.fn}><div className="attend-mark"></div></td>
        </tr>
        <tr>
          <td>AN</td>
          <td className={studentData.ATTENDANCE.monday.an}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.tuesday.an}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.wednesday.an}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.thursday.an}><div className="attend-mark"></div></td>
          <td className={studentData.ATTENDANCE.friday.an}><div className="attend-mark"></div></td>
        </tr>
      </table>
      <div className="homework-analytics">
      <div className="homework">
        <div className="heading">Homework</div>
        {studentData.homework.map((subject) => (
          <div className="subject" key={subject}>{subject.toUpperCase()}</div>
        ))}
      </div>
      <div className="analytics">
        <div className="heading">Behavioral Analytics</div>
        <PieChart
          colors={["green", "red"]}
          series={[
            {
              data: [
                { id: 0, value: good, label: "Good" },
                { id: 1, value: bad, label: "Bad" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      </div>
    </main>
  );
};

export default Main;
