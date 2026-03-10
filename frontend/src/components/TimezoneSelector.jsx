
function TimezoneSelector() {

    return (
        <div class="timezone">
            <label for="timezone-select">Timezone:</label>
            <select id="timezone-select" name="timezone" defaultValue={"PST"}>
                <option value="PST">(PST) Pacific Time</option>
                <option value="EST">(EST) Eastern Time</option>
                <option value="CST">(CST) Central Time</option>
                <option value="MST">(MST) Mountain Time</option>
            </select>
        </div>
    )
}

export default TimezoneSelector