﻿using Aplicacao.DTOs;
using Aplicacao.Interfaces;
using Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace PIM_UrbanFarm.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class AbastecimentoEstoqueController : Controller
{
    private readonly IAbastecimentoEstoqueServico _abastecimentoEstoqueServico;

    public AbastecimentoEstoqueController(IAbastecimentoEstoqueServico abastecimentoEstoqueServico)
    {
        _abastecimentoEstoqueServico = abastecimentoEstoqueServico;
    }

    [HttpPost]
    public ActionResult InserirAbastecimentoEstoque(AbastecimentoEstoque abastecimentoEstoque)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        return _abastecimentoEstoqueServico.InserirAbastecimentoEstoque(abastecimentoEstoque)
            ? Ok("Abastecimento inserido com sucesso.")
            : StatusCode(500, "Ocorreu um erro ao tentar inserir.");
    }

    [HttpGet]
    public ActionResult ObterPorId(int id)
    {
        try
        {
            var abastecimentoEstoque = _abastecimentoEstoqueServico.ObterPorId(id);
            return Ok(abastecimentoEstoque);
        }
        catch (Exception e)
        {
            return StatusCode(500, "Ocorreu um erro ao tentar obter os abastecimentos.");
        }
    }

    [HttpGet]
    public ActionResult ObterAbastecimentoEstoque()
    {
        try
        {
            var abastecimentoEstoque = _abastecimentoEstoqueServico.ObterAbastecimentoEstoque();
            return Ok(abastecimentoEstoque);
        }
        catch (Exception e)
        {
            return StatusCode(500, "Ocorreu um erro ao tentar obter os abastecimentos.");
        }
    }

    [HttpPut]
    public ActionResult AlterarAbastecimentoEstoque(AbastecimentoEstoque abastecimentoEstoque)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_abastecimentoEstoqueServico.AlterarAbastecimentoEstoque(abastecimentoEstoque))
            {
                return Ok("Abastecimento de estoque alterado com sucesso.");
            }

            return NotFound("Abastecimento de estoque não encontrada.");
        }
        catch (Exception)
        {
            return StatusCode(500, "Ocorreu um erro ao tentar alterar.");
        }
    }

    [HttpDelete]
    public ActionResult ExcluirAbastecimentoEstoque(int id)
    {
        try
        {
            if (_abastecimentoEstoqueServico.ExcluirAbastecimentoEstoque(id))
            {
                return Ok();
            }

            return NotFound("Abastecimento de estoque não encontrada.");
        }
        catch (ArgumentException e)
        {
            return BadRequest(e.Message);
        }
        catch (Exception)
        {
            return StatusCode(500, "Ocorreu um erro ao tentar excluir.");
        }
    }
}