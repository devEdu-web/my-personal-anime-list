        <div class="row">
            <div class="col col-1">#</div>
            <div class="col">Name</div>
            <div class="col col-2">Situation</div>
            <div class="col col-1">Score</div>
            <div class="col">Comments</div>
            <div class="col col-1">Edit</div>
        </div>

        <% for(let i = 0; i < animes.length; i++) {%> 
            <div class="row">

                <div class="col col-1"><%= i + 1 %> </div>
                <div class="col"><%= animes[i].title %></div>
                <div class="col col-2"><%= animes[i].situation %> </div>
                <div class="col col-1"><%= animes[i].score %> </div>
                <div class="col"><%= animes %> </div>
                <div class="col col-1"></div>

            </div>
        <% } %> 