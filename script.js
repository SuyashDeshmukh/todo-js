var tasks = document.getElementById('tasks');
        var task = document.getElementById('task-item');
        var i = 1;
        task.addEventListener('keypress', function (event) {
            if (event.keyCode == 13) {
                console.log(event);
                i++;
                //tasks.push(task.innerHTML);

                // Create Card
                var newcard = document.createElement('div');
                newcard.classList = 'card card-body mb-2';

                // Create Card body - inline block
                var newtask = document.createElement('div');;
                newtask.classList = 'd-inline-block';
                newtask.innerText = task.value;
                newcard.appendChild(newtask);

                // Create Done button
                var donebtn = document.createElement('button');
                donebtn.setAttribute('type', 'button');
                donebtn.setAttribute('aria-label', 'Done');
                donebtn.setAttribute('id', 'done' + i);
                donebtn.classList = 'close mx-4';

                //Create Span inside button
                var dsp = document.createElement('span');
                dsp.setAttribute('aria-hidden', 'true');
                dsp.innerText = '✓';

                // Event Listener to delete button
                donebtn.addEventListener('click', function (event) {
                    this.parentElement.style.textDecoration = 'line-through';
                    this.style.color = 'green';
                });

                // Create Delete button
                var btn = document.createElement('button');
                btn.setAttribute('type', 'button');
                btn.setAttribute('aria-label', 'Close');
                btn.setAttribute('id', 'close' + i);
                btn.classList = 'close';

                //Create Span inside button
                var sp = document.createElement('span');
                sp.setAttribute('aria-hidden', 'true');
                sp.innerText = '×';

                donebtn.appendChild(dsp);
                btn.appendChild(sp);

                newtask.appendChild(btn);
                newtask.appendChild(donebtn);


                // Event Listener to delete button
                btn.addEventListener('click', function (event) {
                    tasks.removeChild(this.parentElement.parentElement);
                });

                tasks.insertBefore(newcard, tasks.firstChild);
                task.value = '';
            }
        });