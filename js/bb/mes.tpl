<ul id="filter-container-feature" class="feature">
<% _.each(dias, function(dia) { %>  
<li>
    <a href="<%= dia.link %>" class="thumb" >
        <img src="<%= dia.src %>" alt="" />
        <div class="date">
            <span class="d" style="font-size: 10px;line-height: 12px;"><%= dia.dia %> <%= messtr %></span>
            <span class="m"><%= anio %></span>
            <span class="d" style="font-size: 10px;line-height: 12px;"><%= dia.diaSem %></span> 
            
        </div>
    </a>
        
</li>
<% }); %>  
</ul>