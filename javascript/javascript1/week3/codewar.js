/* Job Matching #1 */
/* function match(candidate, job) {
  if (candidate.length | job.length) {
    `There is an error.The input value shouldn't be empty `;
  } else if (candidate.rockStar) {
    return 0.9 * candidate.minSalary <= job.maxSalary ? true : false;
  } else {
    return candidate.minSalary <= job.maxSalary ? true : false;
  }
}
const candidate1 = { minSalary: 120000, rockStar: true };
const job1 = { maxSalary: 200000 };
const job2 = { maxSalary: 100000 };
console.log(match(candidate1, job1));
console.log(match(candidate1, job2)); */

/* Job Matching #2 */
function match(job, candidates) {
  for (let element of candidates) {
    if (
      (element.desiresEquity && job.equityMax !== 0) ||
      element.desiresEquity === false
    ) {
      for (let item of job.locations) {
        if (
          item === element.currentLocation ||
          element.desiredLocations.includes(item)
        ) {
          console.log(
            `Candidate ${
              candidates.indexOf(element) + 1
            } is matched with this job`
          );
        }
      }
    } else {
      console.log(
        `Candidate ${candidates.indexOf(element) + 1} is matched with this job`
      );
    }
  }
}
const candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles", "Colorado"],
  },
  {
    desiresEquity: false,
    currentLocation: "San Francisco",
    desiredLocations: ["New York", "Los Angeles", "Colorado"],
  },
];
const job = {
  equityMax: 1.2,
  locations: ["New York", "Kentucky"],
};
match(job, candidates);
