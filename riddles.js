        alert ('Добрый день! Предупреждаю, что ваши ответы должны начинаться с большой буквы. Удачной игры');

        var correctAnswerNumber = 0;
        
        var inCaseOfCorrectAnswer = 'Правильный ответ, поздравляю!';
        var inCaseOfError = 'Неправильный ответ, сожалею';

        var arr_q = new Array (
            'Как называется повар-ловелас, ответственный за супы в рыбном ресторане?',
            'Что бодибилдеры используют вместо стульев?',
            'Как называется боязнь прихода Санта-Клауса?',
            'Как называется маленький голландец, который отслеживает данные?'
        ); 
        var arr_a = ["Ухажер", 'Кресла-качалки', 'Клаустрофобия', 'Датчик'];
        console.log (arr_q);
        console.log (arr_a);

        for (var j = 0; j < arr_q.length; j++) {
            var a = prompt (arr_q[j], 0);
            if (a == arr_a[j]) {
                correctAnswerNumber++;
                alert (inCaseOfCorrectAnswer);
            } else {
                alert (inCaseOfError);
            }
        }

        var output = 'Игра закончена! Правильных ответов: ' + correctAnswerNumber;
        alert(output); 