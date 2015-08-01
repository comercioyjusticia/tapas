<div class="wrapper cf">
    <ul id="nav" class="sf-menu">
        <% _.each(anios, function(meses, anio) { %>  
        <li>
            <a href='#mes/<%= anio %>/1'><%= anio %><i><b></b></i></a> 
             <ul>
                <% _.each(meses, function(data, mes) { %>          
                <li><a href='#mes/<%= anio %>/<%=mes%>'><%=messtr[mes]%></a></li>
                <% }); %>
            </ul>
        </li>  

        <% }); %>
        
    </ul>
    <div id="combo-holder"></div>
</div>