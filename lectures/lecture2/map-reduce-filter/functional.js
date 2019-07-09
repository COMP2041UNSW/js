const ACCT = require('./accounting_data_2019');

const courses = ACCT.courses.map(({ name, code, study_level: level }) => {
    return {
        name,
        code,
        level
    };
});

console.log(courses);

