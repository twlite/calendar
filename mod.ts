export const CONSTANT_DAYS_ORDER = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export interface CalendarOptions {
    year?: number;
    month?: number;
}

export interface CalendarDaysData {
    row: number;
    day: number;
    name: string;
    holiday: boolean;
}

export interface CalendarData {
    year: number;
    month: number;
    totalDays: number;
    monthName: string;
    days: CalendarDaysData[];
    leapYear: boolean;
    leapMonth: boolean;
}

class Calendar {
    year: number;
    month: number;
    days: string[];
    months: string[];
    holidays: number[];

    /**
     * Creates new Calendar
     * @example ```js
     * const calendar = new Calendar({ year: 2021, month: 6 });
     * console.log(calendar.create());
     * ```
     */
    constructor(options?: CalendarOptions) {

        /**
         * Current year
         */
        this.year = this._validate(options && options.year || new Date().getFullYear(), "number", "year");

        /**
         * Current month
         */
        this.month = this._validate(options && options.month || new Date().getMonth(), "number", "month");

        /**
         * Days format
         */
        this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        /**
         * Months format
         */
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        /**
         * Holiday(s). By default, it is set to sunday
         */
        this.holidays = [0];
    }

    /**
     * Sets custom days notation
     * @param days Days name
     */
    public setDays(days: string[]): Calendar {
        const isValid = days.length === 7 && days.some(x => typeof x === "string");
        if (!isValid) throw new Error("Invalid days data");

        this.days = days;
        return this;
    }

    /**
     * Sets custom months notaiton
     * @param months Months name
     */
    public setMonths(months: string[]): Calendar {
        const isValid = months.length === 12 && months.some(x => typeof x === "string");
        if (!isValid) throw new Error("Invalid months data");

        this.months = months;
        return this;
    }

    /**
     * Sets holidays
     * @param data Holidays day array. Example: `[0]` refers to `sunday` whereas `[0, 6]` refers to `saturday` and `sunday`.
     */
    public setHolidays(data: number[]) {
        const isValid = data.some(x => typeof x === "number" && (x >= 0 && x < 7));
        if (!isValid) throw new Error("Invalid holidays data");

        this.holidays = data;
        return this;
    }

    /**
     * Returns total number of days in this month
     */
    public get length(): number {
        if (this.month === 1 && ((this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0)) return 29;
        return CONSTANT_DAYS_ORDER[this.month]
    }

    /**
     * If it is a leap year
     */
    public get leap(): boolean {
        return (this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0;
    }

    /**
     * Returns current month name
     */
    public get monthName(): string {
        return this.months[this.month];
    }

    /**
     * Creates calendar
     * @example ```js
     * const data = new Calendar({ year: 2020, month: 0 });
     * console.log(data.create());
     * ```
     */
    public create(): CalendarData {
        const firstDay = new Date(this.year, this.month, 1);
        const intitalDay = firstDay.getDay();
        const length = this.length;
        const month = this.monthName;
        
        let days = [];

        let day = 1;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 7; j++) {
                if (day <= length && (i > 0 || j >= intitalDay)) {
                    days.push({
                        row: i,
                        day: day,
                        name: this.days[j],
                        holiday: this.holidays.some(x => x === j)
                    });
                    day++;
                }
            }

            if (day > length) break;
        }

        return {
            year: this.year,
            month: this.month,
            totalDays: length,
            monthName: month,
            days: days,
            leapMonth: this.length === 29,
            leapYear: this.leap
        } as CalendarData;
    }

    /**
     * String representation of the calendar
     */
    public toString(): string {
        return `<${this.constructor.name} ${this.year}-${this.month}>`;
    }

    /**
     * Static calendar creator
     * @param year Creates calendar of full year
     * @example ```js
     * const calendar = Calendar.createCalendar(2020);
     * console.log(calendar.map(m => m.monthName));
     * ```
     */
    public static createCalendar(year = new Date().getFullYear()): CalendarData[] {
        const valid = typeof year === "number" && year >= 1000 && year <= 9999;
        if (!valid) throw new TypeError(`Invalid year: ${year}!`);

        const cal = [];
        for (let i = 0; i < 12; i++) {
            const st = new Calendar({
                year: year,
                month: i
            });

            cal.push(st.create());
        }

        return cal;
    }

    /**
     * Internal number validation method
     * @param data data to validate
     * @param vtype value data type
     * @param dataType validation data type
     */
    private _validate(data: number, vtype = "number", dataType: "year" | "month"): number {
        
        switch(dataType) {
            case "month":
                if (typeof data === vtype && data >= 0 && data <= 11) return data;
                throw new TypeError(`Invalid month: ${data}!`);
            case "year":
                if (typeof data === vtype && data >= 1000 && data <= 9999) return data;
                throw new TypeError(`Invalid year: ${data}!`);
            default:
                throw new Error("Invalid type");
        }

    }

}

export { Calendar };
export default Calendar;