//  https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  if (!prerequisites.length) return true;
  let coursesObj = Object.fromEntries(new Array(numCourses).fill([]).map((ele, i) => (ele = [i, ele])));

  prerequisites.forEach(ele => (coursesObj[ele[0]] = [...coursesObj[ele[0]], ele[1]]));

  // for (let [course, prereq] of prerequisites) {
  //   courses[course] = [...courses[course], prereq];
  // }

  Object.entries(coursesObj).forEach(([course, prereqs]) => {
    if (hasConflict(course, prereqs, new Set(), coursesObj)) return false;
  });

  return true;
};

const hasConflict = (course, prereqs, visited, courses, conflict = false) => {
  if (!prereqs.length) return conflict;
  if (prereqs.includes(course) || visited.has(Number(course))) conflict = true;
  visited.add(Number(course));
  prereqs.forEach(p => hasConflict(p, courses[p], visited, courses));
  return conflict;
};

console.log(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
