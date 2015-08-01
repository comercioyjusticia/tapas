<ul id="filter-container-feature" class="feature">
<li style="width: 100%">
<div class="date">
    <span class="m">
        <a target="_blank" href="<%=diaPDF%>" class="thumb" style="font-weight: bold;font-size: 21px;">
            Ver Tapa en PDF
        </a>
    </span>
</div>

<a target="_blank" style="width: 95%" href="<%=diaPDF%>" class="thumb" >
    <img src="<%=diaJPG%>" alt="" />
    <div class="date">
        <span class="d" style="font-size: 10px;line-height: 12px;"><%= dia %> <%= messtr %></span>
        <span class="m"><%= anio %></span>
        <span class="d" style="font-size: 10px;line-height: 12px;"><%=diaSem%></span> 
        
    </div>
</a>

</li>
</ul>