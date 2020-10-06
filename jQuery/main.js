/////////////////////////////////////////////////////////
/////		Base definitions. DO NOT EDIT!!!		/////
/////////////////////////////////////////////////////////

// API URL to get the latest exchange rates
// Note: the returned rates are based on the EUR
var endpointURL = 'https://api.exchangeratesapi.io/latest';

// use this object to create logic to populate the table
var testExchangeRates = {
	base: "EUR",
	date: "2019-05-31",
	rates: {
		AUD: 1.6136,
		BGN: 1.9558,
		BRL: 4.4462,
		CAD: 1.5115,
		CHF: 1.1214,
		CNY: 7.7045,
		CZK: 25.816,
		DKK: 7.468,
		GBP: 0.88693,
		HKD: 8.7457,
		HRK: 7.4185,
		HUF: 324.34,
		IDR: 15982.17,
		ILS: 4.0505,
		INR: 77.741,
		ISK: 138.3,
		JPY: 121.27,
		KRW: 1328.31,
		MXN: 21.8922,
		MYR: 4.6747,
		NOK: 9.7915,
		NZD: 1.7134,
		PHP: 58.225,
		PLN: 4.2843,
		RON: 4.743,
		RUB: 72.9053,
		SEK: 10.639,
		SGD: 1.5378,
		THB: 35.282,
		TRY: 6.527,
		USD: 1.1151,
		ZAR: 16.3834
	}
};

/////////////////////////////////////////////////////////
/////					SOLUTIONS					/////
/////////////////////////////////////////////////////////
$(document).ready(function () {
	
	$(".btn").click(function (event) {
		event.preventDefault();
		var fromCurrency = $("#base-currency");
		var toCurrency = $(".currencies");
		var metCondition;
		var symbols = "";


		if (fromCurrency[0].selectedIndex > 0) {
			fromCurrency = fromCurrency[0].options[fromCurrency[0].selectedIndex].text;
			$(".currencies .form-check-input").each(function (i, obj) {
				if (obj.checked) {
					metCondition = true;
					toCurrency.push(obj.value);
				}
			});
			if (Boolean(metCondition)) {
				//selected dropdown and checkboxes
				for (var i = 1; i < toCurrency.length; i++) {
					symbols += "," + toCurrency[i];
				}
				endpointURL = endpointURL + "?base=" + fromCurrency + "&symbols=" + symbols.substring(1);
				$.ajax({ url: endpointURL })
					.done((json) => {
						$(".exchange-rates-container")[0].style.display = "initial"
						$(".table th")[0].append(" ", json.base);
						for (let key in json.rates) {
							$(".table th")[1].append(" ", key, json.rates[key]);
						}
					})
					.fail(() => {
						alert("Error");
					})
			} else {
				//selected dropdown only
				endpointURL = endpointURL + "?base=" + fromCurrency;
				$.ajax({ url: endpointURL })
					.done((json) => {
						$(".exchange-rates-container")[0].style.display = "initial";
						$(".table th")[0].append(" ", json.base);
						for (let key in json.rates) {
							$(".table th")[1].append(" ", key , json.rates[key]);
						}
					})
					.fail(() => {
						alert("Error");
					})
			}
		} else {
			throw new Error("Please choose a currency first");
		}
	})
})
