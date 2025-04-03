
const forEach = (items, callback) => {
    for(let i = 0; i < items.length; ++i) {
        callback(items[i]);
    }
}

it("mock callback", () => {
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2);
    //[callback1(0), callback2(1)]

    // expect(mockCalledback.mock.calls).toBe([[0], [1]]);
    expect(mockCalledback.mock.calls[0][0]).toBe(0);
    expect(mockCalledback.mock.calls[1][0]).toBe(1);

    expect(mockCalledback.mock.results[0].value).toBe(42);
    expect(mockCalledback.mock.results[1].value).toBe(43);
});

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(`Hello`);

    const results = mock();
    const results2 = mock();
    const results3 = mock();

    expect(results).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe(`Hello`);
});

/*
mock an api call
*/
const axios = require('axios');

const fetchData = async (id) => {
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	console.log(results);
	return results.data;
};

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Heart on fire"
        }
    })
    const results = await fetchData(1);

    expect(results.todo).toBe("Heart on fire")
});